"use client";

import { ArrowRight } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";

export type GameButtonVariant = "primary" | "secondary" | "ghost";
export type GameButtonSize = "sm" | "md" | "lg";

export type GameButtonProps = {
  children: ReactNode;
  variant?: GameButtonVariant;
  size?: GameButtonSize;
  rightArrow?: boolean;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
};

const variantStyles: Record<GameButtonVariant, string> = {
  primary: "game-button--primary",
  secondary: "game-button--secondary",
  ghost: "game-button--ghost",
};

const sizeStyles: Record<GameButtonSize, string> = {
  sm: "game-button--sm",
  md: "game-button--md",
  lg: "game-button--lg",
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function GameButton({
  children,
  variant = "primary",
  size = "md",
  rightArrow = false,
  href,
  onClick,
  disabled = false,
  className,
}: GameButtonProps) {
  const buttonClassName = cn(
    "game-button",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "game-button--disabled",
    className,
  );

  const content = (
    <>
      <span className="game-button__shine" aria-hidden="true" />
      <span className="game-button__inner-border" aria-hidden="true" />
      <span className="game-button__content">
        {children}
        {rightArrow ? <ArrowRight className="game-button__arrow" aria-hidden="true" /> : null}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        className={buttonClassName}
        onClick={disabled ? undefined : (onClick as MouseEventHandler<HTMLAnchorElement> | undefined)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={buttonClassName}
      disabled={disabled}
      onClick={disabled ? undefined : (onClick as MouseEventHandler<HTMLButtonElement> | undefined)}
    >
      {content}
    </button>
  );
}
