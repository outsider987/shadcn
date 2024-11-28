import { cn } from "@/lib/utils";
import clsx from "clsx";
import React from "react";
import ReactDOM from "react-dom";

export interface ModalProps {
  title?: string;
  show: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  blur?: boolean;
  dropAble?: boolean;
  footer?: React.ReactNode;
  closeable?: boolean;
  className?: string;
  titleClassName?: string;
  bottomSection?: React.ReactNode;
}

const Modal = ({
  title = "",
  show,
  onClose,
  children,
  size = "3xl",
  blur = false,
  dropAble = false,
  closeable = true,
  footer,
  className,
  titleClassName,
  bottomSection,
}: ModalProps) => {
  if (!show) return null;

  const sizeClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl sm:!max-w-[300px] md:!max-w-[300px]",
    "2xl": "max-w-2xl sm:!max-w-[300px] md:!max-w-[300px] duration-300",
    "3xl": "max-w-3xl sm:!max-w-[300px] md:!max-w-[300px] duration-300",
    "4xl": "max-w-4xl sm:!max-w-[300px] md:!max-w-[300px] duration-300",
  };

  const modalContent = (
    <div className="fixed inset-0 max-w- flex items-center justify-center z-[99]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        style={{ backdropFilter: blur ? "blur(10px)" : "none" }}
        onClick={dropAble ? onClose : undefined}
      ></div>

      {/* Modal */}
      <div className="inset-0 flex items-center justify-center w-screen z-[99] relative">
        <div
          className={cn(
            "relative rounded-2xl w-full p-5 mx-auto bg-white shadow-[0px_6px_12px_0px_#00000005]",
            "sm:min-h-[270px] md:min-h-[270px]",

            sizeClasses[size],
            "min-w-[768px] sm:min-w-[300px] md:min-w-[300px] ",
            className
          )}
        >
          <div>
            <span>
              {closeable && (
                <div className="flex justify-end">
                  <button
                    onClick={onClose}
                    className={clsx(
                      "absolute top-4 right-4 text-black hover:text-gray-700 transition-colors duration-200",
                      "sm:relative sm:top-0 sm:right-0 md:relative md:top-0 md:right-0",
                      "text-[#006AFF]"
                    )}
                    aria-label="Close modal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </span>

            <h2
              className={clsx(
                "font-semibold text-[#081531] text-2xl sm:text-xl md:text-xl leading-[22.8px] tracking-[-0.01em]",
                titleClassName
              )}
            >
              {title}
            </h2>
          </div>

          <div className="flex items-center justify-center min-h-[180px] sm:min-h-[80px] md:min-h-[80px]">
            {children}
          </div>

          {footer && (
            <div className="flex justify-center items-center mt-4 w-full">
              {footer}
            </div>
          )}

          {bottomSection && (
            <div className="absolute flex justify-center w-full mt-10">
              {bottomSection}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;
