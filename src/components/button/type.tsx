export interface ButtonProps {
  bgSize?: string;
  fontSize?: string | number;
  text?: string; // text 버튼
  src?: string; // image 버튼
  buttonName?: string;
  link?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick?: (text: string) => void;
}
