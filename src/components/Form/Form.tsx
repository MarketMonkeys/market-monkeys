'use client';
import Input from '@/components/Input/Input';
import styles from './Form.module.css';
import UserIcon from '@/components/Icons/UserIcon';
import PhoneIcon from '@/components/Icons/PhoneIcon';
import EmailIcon from '@/components/Icons/EmailIcon';
import CommentIcon from '@/components/Icons/CommentIcon';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface FormProps {
  name: string;
  phone: string;
  email: string;
  comment: string;
}

const Form = () => {
  const form = useRef<null | HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormProps>();
  const onSubmit: SubmitHandler<FormProps> = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Message Sent, We will get back to you shortly', result);
        },
        (err) => {
          console.log('An error occurred, Please try again', err);
        }
      );
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div style={{ padding: '0 0 110px 88px' }}>
      <h2 className={styles.heading}>get in touch</h2>
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={styles.form}
      >
        <Input
          placeholder="Name"
          type="text"
          Icon={UserIcon}
          errorMsg={errors.name?.message}
          {...register('name', {
            required: 'Name is required',
            validate: {
              minLength: (v) =>
                v.length >= 5 ||
                'The username should have at least 5 characters',
              matchPattern: (v) =>
                /^[a-zA-Z ]+$/.test(v) || 'Username must contain only letters',
            },
          })}
        />
        <Input
          placeholder="Phone"
          type="tel"
          Icon={PhoneIcon}
          errorMsg={errors.phone?.message}
          {...register('phone', {
            required: 'Phone is required',
            validate: {
              matchPattern: (v) =>
                /^[0-9\s+()-]{8,}$/.test(v) || 'Phone number is not valid',
            },
          })}
        />
        <Input
          placeholder="E-Mail"
          type="email"
          Icon={EmailIcon}
          errorMsg={errors.email?.message}
          {...register('email', {
            required: 'Email is required',
            validate: {
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                'Email address must be a valid address',
            },
          })}
        />
        <Input
          placeholder="Comment (if necessary)"
          type="text"
          Icon={CommentIcon}
          errorMsg={errors.comment?.message}
          {...register('comment', { required: true, maxLength: 30 })}
        />
        <button className={styles.button}>SEND REQUEST</button>
        <p className={styles.description}>
          I agree to allow Market Monkeys Inc. to store and process my personal
          data.
        </p>
      </form>
    </div>
  );
};

export default Form;
