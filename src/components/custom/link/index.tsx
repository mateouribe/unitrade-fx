import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToPage } from "../../../utils/navigateToPage";
import gsap, { Expo } from "gsap";

type Props = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  route: string;
  underline?: boolean;
};

const Link = ({
  className,
  onClick,
  children,
  route,
  underline = false,
}: Props) => {
  const navigate = useNavigate();
  const container = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const exitTime = useRef<number>(0);

  useLayoutEffect(() => {
    if (underline) {
      const ctx = gsap.context(() => {
        tl.current = gsap.timeline({ paused: true });
        gsap.set(".underline-link", {
          transformOrigin: "left",
          scaleX: 0,
        });

        tl.current.to(".underline-link", {
          scaleX: 1,
          duration: 0.8,
          ease: Expo.easeInOut,
          onComplete: () => {
            gsap.set(".underline-link", {
              transformOrigin: "right",
            });
          },
        });

        tl.current.addPause();

        exitTime.current = tl.current.duration();

        tl.current.to(".underline-link", {
          scaleX: 0,
          duration: 0.8,
          ease: Expo.easeInOut,
          onComplete: () => {
            gsap.set(".underline-link", {
              transformOrigin: "left",
            });
          },
        });
      }, container);

      return () => ctx.revert();
    }
  }, [underline]);

  return (
    <li
      onClick={() => {
        onClick && onClick();
        navigateToPage(navigate, route);
      }}
      className={`${className} cursor-pointer relative`}
      ref={container}
      onMouseEnter={
        underline
          ? () => {
              if (tl.current !== null && tl.current !== undefined) {
                if (tl.current.time() < exitTime.current) {
                  tl.current.play();
                } else {
                  tl.current.restart();
                }
              }
            }
          : undefined
      }
      onMouseLeave={
        underline
          ? () => {
              if (tl.current !== null && tl.current !== undefined) {
                if (tl.current.time() < exitTime.current) {
                  tl.current.reverse();
                } else {
                  tl.current.play();
                }
              }
            }
          : undefined
      }
    >
      {children}
      {underline && (
        <span className="absolute w-[110%] h-[1px] bg-main bottom-0 left-1/2 transform -translate-x-1/2 origin-left underline-link" />
      )}
    </li>
  );
};

export default Link;
