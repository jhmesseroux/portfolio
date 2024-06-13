// import styles from './input.module.css'
import { cn } from '@/helpers'
import FormError from '../errors/FormError'
import EyeIcon from '../icons/EyeIcon'

export interface CustomInputProps {
  hasError?: string
  optional?: boolean
  textArea?: boolean
  fieldsetClassName?: string
  label?: string
  labelClassName?: string
  templateExtra?: () => React.ReactNode | React.ReactNode[] | undefined
  rightSideLabel?: () => React.ReactNode | React.ReactNode[] | undefined
}
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, CustomInputProps {}

const Input = ({
  label = '',
  hasError = '',
  labelClassName,
  fieldsetClassName,
  optional,
  textArea,
  className,
  templateExtra,
  rightSideLabel,
  ...props
}: InputProps) => {
  const baseClassName = `w-full px-2 py-[6px] border border-gray-300 dark:border-slate-800 hover:!border-brand focus:border-primary dark:focus:border-brand focus:border outline-none focus:outline-none bg-white dark:bg-slate-950 dark:text-slate-400  placeholder:text-slate-400 dark:placeholder:text-slate-600 disabled:cursor-not-allowed rounded `

  const checkBoxBaseClass =
    'flex flex-row mb-4 w-full py-[6px] items-center gap-4 border border-gray-300 dark:border-dark2 hover:!border-primary focus:border-primary dark:focus:border-primary focus:border outline-none focus:outline-none px-2 rounded-md'
  return (
    <fieldset className={cn(props.type === 'checkbox' ? checkBoxBaseClass : 'flex flex-col mb-4 w-full relative', fieldsetClassName)}>
      {label && (
        <label
          htmlFor={props.name}
          className={cn(
            'font-medium flex items-center justify-between first-letter:capitalize text-slate-700 dark:text-slate-500 py-0.5  p-1 ',
            labelClassName
          )}
        >
          <span>
            {label}{' '}
            {optional ? <span className='sr-only text-xs opacity-50'>(opcional)</span> : <span className='text-red-400 font-bold'>*</span>}
          </span>
          {rightSideLabel && rightSideLabel()}
        </label>
      )}
      {textArea ? (
        <textarea className={cn(baseClassName, className)} {...props} id={props.id || props.name}></textarea>
      ) : (
        <div className='relative'>
          <input className={cn(props.type === 'checkbox' ? '' : baseClassName, className)} {...props} id={props.name} />
          {props.type === 'password' && (
            <EyeIcon
              className='absolute right-2 top-2'
              onClick={() => {
                const input = document.getElementById(props.name as string) as HTMLInputElement
                if (input) {
                  input.type = input.type === 'password' ? 'text' : 'password'
                }
              }}
            />
          )}
        </div>
      )}

      {templateExtra && <div className='items-end text-xs self-end text-primary'>{templateExtra()}</div>}
      {/* TODO NO ANDA CUANDO HAY RESTRICCIONES...  (props.value == null || props.value == '') && */}
      {hasError.length > 0 && <FormError text={hasError || 'Campo obligatorio'} className='text-left my-0 p-0 pt-0.5' />}
    </fieldset>
  )
}

export default Input
