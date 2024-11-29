import { FC } from "react";

interface SvgIconProps {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

const SvgIcon: FC<SvgIconProps> = ({ name, className }) => {
  const renderIcon = () => {
    switch (name) {
      case "switch":
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5.00002L4.19526 2.80476C4.45561 2.54441 4.87772 2.54441 5.13807 2.80476L7.33333 5.00002M8.66667 11L10.8619 13.1953C11.1223 13.4556 11.5444 13.4556 11.8047 13.1953L14 11M4.66667 3.33335V13.3334M11.3333 2.66669V12.6667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  return <div className={className}>{renderIcon()}</div>;
};

export default SvgIcon;
