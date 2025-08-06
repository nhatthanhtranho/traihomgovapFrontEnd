'use client';

import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { TextField, FormControl, Select, MenuItem, Alert } from '@mui/material';
interface FormData {
  phoneNumber: string;
  name: string;
  question: string;
  category: string;
}

const ContactForm = () => {
  const NEXT_PUBLIC_MAIL_SERVICE_ID = process.env.NEXT_PUBLIC_MAIL_SERVICE_ID || '';
  const NEXT_PUBLIC_MAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID || '';
  const NEXT_PUBLIC_EMAIL_KEY = process.env.NEXT_PUBLIC_EMAIL_KEY || '';

  const [formData, setFormData] = useState<FormData>({
    phoneNumber: '',
    name: '',
    question: '',
    category: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({});
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^0\d{8,10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Vui lòng nhập số điện thoại.';
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Số điện thoại không hợp lệ.';
    }
    if (!formData.name) {
      newErrors.name = 'Vui lòng nhập tên.';
    }
    if (!formData.question) {
      newErrors.question = 'Vui lòng nhập nội dung câu hỏi.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await emailjs.send(
          NEXT_PUBLIC_MAIL_SERVICE_ID,
          NEXT_PUBLIC_MAIL_TEMPLATE_ID,
          formData as any,
          { publicKey: NEXT_PUBLIC_EMAIL_KEY }
        );
        console.log('Form Data:', formData);
        setSuccessMessage('Đã gửi email thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.');
        setFormData({
          phoneNumber: '',
          name: '',
          question: '',
          category: '',
        });
        setErrorMessage('');
      } catch (err) {
        console.error('FAILED...', err);
        setErrorMessage('Đã xảy ra lỗi khi gửi email. Vui lòng thử lại.');
      }
    }
  };

  return (
    <div className="md:p-16">
      <div className="justify-center items-center flex mx-auto gap-16">
        <div className="text-gray-600 shadow bg-white p-8 md:p-12 rounded">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 w-72 md:w-96">
            Liên Hệ Tư Vấn
          </h1>

          {successMessage && <Alert severity="success">{successMessage}</Alert>}
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <p className="mb-2">Số điện thoại</p>
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                fullWidth
                value={formData.phoneNumber}
                onChange={handleChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
              />
            </div>
            <div className="mb-4">
              <p className="mb-2">Tên của bạn</p>
              <TextField
                id="name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </div>
            <div className="mb-4">
              <p className="mb-2">Nội dung cần tư vấn</p>
              <FormControl fullWidth>
                <Select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Chọn nội dung
                  </MenuItem>
                  <MenuItem value="An táng trọn gói">An táng trọn gói</MenuItem>
                  <MenuItem value="Hỏa táng trọn gói">Hỏa táng trọn gói</MenuItem>
                  <MenuItem value="Cải táng trọn gói">Cải táng trọn gói</MenuItem>
                  <MenuItem value="Dịch vụ khác">Dịch vụ khác</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="mb-4">
              <p className="mb-2">Câu hỏi / Nội dung chi tiết</p>
              <textarea
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                rows={5}
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                  errors.question ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Nhập nội dung bạn cần tư vấn..."
              />
              {errors.question && <p className="text-red-500 text-sm mt-1">{errors.question}</p>}
            </div>

            <button className="block text-sm bg-gray-700 mt-8 text-white w-full h-12 rounded shadow hover:bg-gray-900 transition-colors mx-auto cursor-pointer">
              Gửi yêu cầu tư vấn
            </button>
          </form>
        </div>
        <div className="hidden lg:block">
          <img
            className="object-cover w-96 object-center"
            src="https://cdn.dribbble.com/userupload/24609792/file/original-0b2515ae17406884c1b4a74d3a5bf15d.jpg?resize=1024x768&vertical=center"
          />
          {/* <p className="flex items-start gap-2 text-sm text-gray-600 tracking-wide">
          <Location size={20} /> 119 Nguyễn Du, P7, Gò Vấp, HCM
        </p>
        <p className="flex items-start gap-2 text-sm text-gray-600 mt-3 tracking-wide">
          <Call size={20} /> 0913.673.661 (Thanh Thời)
        </p>
        <div className="flex flex-row gap-4 mt-3">
          <Image src="/assets/images/facebook.svg" width={24} height={24} alt="Mail Image" preview={false}/>
          <Image src="/assets/images/youtube.svg" width={24} height={24} alt="Mail Image" preview={false}/>
          <Image src="/assets/images/zalo1.svg" width={24} height={24} alt="Mail Image" preview={false}/>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
