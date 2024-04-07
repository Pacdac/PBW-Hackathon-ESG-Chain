
type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, className, disabled }) => {
    const baseClassName = "flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1 rounded hover:bg-tertiary-200 hover:text-white text-xl bg-tertiary-100";
    const combinedClassName = `${baseClassName} ${className || ''}`;

    return (
        <button onClick={onClick} className={combinedClassName} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
