'use client';

import { useState } from 'react';
import { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '../ui/toast';

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

// ToasterToast definition removed for JSX compatibility
// {id, title, description, action, open, onOpenChange, variant}

const listeners = [];

let memoryState = [];

export function toast(props) {
  const id = genId();

  const update = (props) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    });

  const dismiss = () => dispatch({ type: 'CLOSE_TOAST', toastId: id });

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState[memoryState.length - 1]);
  });
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TOAST':
      return [
        ...state,
        {
          ...action.toast,
        },
      ].slice(-TOAST_LIMIT);

    case 'UPDATE_TOAST':
      return state.map((t) =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t
      );

    case 'CLOSE_TOAST': {
      const { toastId } = action;

      if (toastId) {
        setTimeout(() => {
          dispatch({
            type: 'REMOVE_TOAST',
            toastId: toastId,
          });
        }, TOAST_REMOVE_DELAY);
      }

      return state.map((t) =>
        t.id === toastId || toastId === undefined
          ? {
              ...t,
              open: false,
            }
          : t
      );
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return [];
      }
      return state.filter((t) => t.id !== action.toastId);

    default:
      return state;
  }
}

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addListener = (listener) => {
    listeners.push(listener);
  };

  const removeListener = (listener) => {
    const index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };

  return {
    toasts: memoryState,
    toast,
    dismiss: (toastId) =>
      dispatch({ type: 'CLOSE_TOAST', toastId }),
  };
}

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, open, onOpenChange, variant }) {
        return (
          <Toast
            key={id}
            open={open}
            onOpenChange={onOpenChange}
            variant={variant}
          >
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && (
              <ToastDescription>{description}</ToastDescription>
            )}
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
