import { Button as MuiButton, ButtonProps, SxProps, Theme } from '@mui/material';
import { Colors } from "@/app/colors";
import { ReactNode } from 'react';

export type ButtonVariant = 
  | "primary"
  | "secondary"
  | "tertiary"

export const buttonVariants: Record<ButtonVariant, ButtonProps> = {
  primary: {
    sx: {
      backgroundColor: Colors.primary,
      color: Colors.white,
      textTransform: 'none',
      borderRadius: '4px',
      padding: '8px 16px',
      transition: 'all 0.2s ease-in-out',
      boxShadow: `0 4px 14px ${Colors.primary}40`,
      '&:hover': {
        backgroundColor: Colors.primary,
        filter: 'brightness(110%)',
        transform: 'translateY(-2px)',
        boxShadow: `0 6px 20px ${Colors.primary}60`,
      },
      '&:active': {
        transform: 'translateY(1px)',
        filter: 'brightness(90%)',
        boxShadow: `0 2px 10px ${Colors.primary}40`,
      }
    },
  },
  secondary: {
    sx: {
      backgroundColor: 'transparent',
      border: `2px solid ${Colors.primary}`,
      color: Colors.primary,
      textTransform: 'none',
      borderRadius: '4px',
      padding: '8px 16px',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: Colors.primary,
        color: Colors.white,
        transform: 'scale(1.02)',
      },
      '&:active': {
        transform: 'scale(0.98)',
      }
    },
  },
  tertiary: {
    sx: {
      backgroundColor: 'transparent',
      color: Colors.primary,
      textTransform: 'none',
      borderRadius: '4px',
      padding: '4px 8px',
      position: 'relative',
      transition: 'all 0.2s ease-in-out',
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '0%',
        height: '2px',
        bottom: 0,
        left: '50%',
        backgroundColor: Colors.primary,
        transition: 'all 0.3s ease-in-out',
      },
      '&:hover': {
        backgroundColor: 'transparent',
        '&:before': {
          width: '100%',
          left: '0%',
        }
      },
      '&:active': {
        transform: 'scale(0.98)',
      }
    },
  },
};

type CustomButtonProps = Omit<ButtonProps, 'variant'> & {
  variant?: ButtonVariant;
  children: ReactNode;
  sx?: SxProps<Theme>;
  onClick?: () => void;
};

export function Button({
  variant = 'primary',
  children,
  onClick,
  sx
}: CustomButtonProps) {
  const sxProps = {
    ...buttonVariants[variant].sx,
    ...sx,
  };

  return (
    <MuiButton
      {...buttonVariants[variant]}
      sx={sxProps}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
}