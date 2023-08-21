import React, { useReducer } from 'react';
import Button from '@/components/Button';
import { Icon } from '@/components/Icon';
import { InputWrapper, LabelWrapper, InputContainer } from './form.styles';

type ErrorInputProps = {
  hasError: boolean;
  message: string;
};

type InputProps = {
  label: string;
  type: string;
  icon: string;
  required: boolean;
  value: string;
  validated: boolean;
  error: ErrorInputProps;
};

type FormKeyProps = 'fullName' | 'email' | 'phone' | 'help';
type FormProps = Record<FormKeyProps, InputProps>;

const defaultValues: FormProps = {
  fullName: {
    label: 'Full name',
    type: 'text',
    icon: 'badge',
    required: true,
    value: '',
    validated: false,
    error: {
      hasError: false,
      message: '',
    },
  },
  email: {
    label: 'Your email',
    type: 'email',
    icon: 'mail',
    required: true,
    value: '',
    validated: false,
    error: {
      hasError: false,
      message: '',
    },
  },
  phone: {
    label: 'Contact number',
    type: 'tel',
    icon: 'phone',
    required: false,
    value: '',
    validated: false,
    error: {
      hasError: false,
      message: '',
    },
  },
  help: {
    label: 'How can I help?',
    type: 'textarea',
    icon: 'lightbulb',
    required: false,
    value: '',
    validated: false,
    error: {
      hasError: false,
      message: '',
    },
  },
};

const Form = () => {
  const [form, dispatchForm] = useReducer(
    (currentValues: FormProps, newValues: Partial<FormProps>) => ({
      ...currentValues,
      ...newValues,
    }),
    defaultValues,
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // // validate phone number
    // if (form.phone.value) {
    //   dispatchForm({
    //     ...form,
    //     phone: {
    //       ...form.phone,
    //       validated: true,
    //     },
    //   });
    // }

    const nonValidatedFields = Object.values(form)
      .map((i) => i)
      .filter((field) => !field.validated && field.type !== 'tel');

    if (nonValidatedFields.length === 0) {
      // handle form submit here.
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>, type: string) => {
    const {
      currentTarget: { value },
    } = e;

    // don't allow letters in phone number input
    const val = type === 'phone' ? value.replace(/\D/g, '') : value;

    dispatchForm({
      ...form,
      [type]: {
        ...form[type],
        value: val,
        error: {
          hasError: false,
          message: '',
        },
      },
    });
  };

  const handleBlur = (type: string) => {
    // validate input for success.
    if (form[type].value && !form[type].error.hasError) {
      dispatchForm({
        ...form,
        [type]: {
          ...form[type],
          validated: true,
        },
      });
    }

    // handle empty fields (but not telephone input).
    if (!form[type].value && type !== 'phone') {
      dispatchForm({
        ...form,
        [type]: {
          ...form[type],
          error: {
            hasError: true,
            message: 'field cannot be empty',
          },
        },
      });
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (
      type === 'email' &&
      form.email.value &&
      !emailRegex.test(form.email.value)
    ) {
      dispatchForm({
        ...form,
        email: {
          ...form.email,
          error: {
            hasError: true,
            message: 'Enter a valid email',
          },
        },
      });
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {(Object.entries(form) as any).map((i) => {
        const key = i[0];
        const values = i[1];

        // const key = Object.keys(form)[index];
        const { label, error, type, value, validated, icon } = values;
        return (
          <InputWrapper key={icon}>
            <LabelWrapper>
              <label htmlFor={label}>
                {label} {type === 'tel' && <span>&nbsp; (Optional)</span>}{' '}
              </label>
              {error?.hasError && <span>{error.message}</span>}
            </LabelWrapper>
            <InputContainer
              className={type !== 'textarea' ? undefined : 'formTextArea'}
            >
              <span>
                <Icon type={icon} />
              </span>
              {type !== 'textarea' ? (
                <input
                  className={
                    error?.hasError ? 'error' : validated ? 'valid' : undefined
                  }
                  type={type}
                  id={label}
                  onChange={(e) => handleChange(e, key)}
                  onBlur={() => handleBlur(key)}
                  value={value}
                />
              ) : (
                // render text area for the help section.
                <textarea
                  className={
                    error?.hasError ? 'error' : validated ? 'valid' : undefined
                  }
                  type={type}
                  rows={12}
                  id={label}
                  onChange={(e) => handleChange(e, key)}
                  onBlur={() => handleBlur(key)}
                  value={value}
                />
              )}

              {error?.hasError && (
                <span id="validateIcon">
                  <Icon type="error" />
                </span>
              )}

              {value && validated && (
                <span id="validateIcon">
                  <Icon type="checkCircle" />
                </span>
              )}
            </InputContainer>
          </InputWrapper>
        );
      })}

      <div>
        <Button
          type="submit"
          text="Send message"
          icon="send"
          stroke="dark"
          fullWidth
        />
      </div>
    </form>
  );
};

export default Form;
