import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
    labelClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange, onChangeChecked,
        className, spanClassName, labelClassName,
        children,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeChecked && onChangeChecked(e.currentTarget.checked);
    }

    const finalInputClassName = `${className ? className : s.checkbox}`
    const finalSpanClassName = `${spanClassName ? spanClassName : s.spanClassName}`
    const finalLabelClassName = `${labelClassName ? labelClassName : s.label}`

    return (
        <label className={finalLabelClassName}>
            <input type={'checkbox'}
                   onChange={onChangeCallback}
                   className={finalInputClassName}
                   {...restProps}
            />
            {children && <span className={finalSpanClassName}>{children}</span>}
        </label>
    )
}

export default SuperCheckbox
