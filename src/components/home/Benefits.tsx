import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Benefits.css';

const benefits = [
  {
    title: 'Hỗ trợ nhanh chóng 24/7',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
        />
      </svg>
    ),
    text: 'Đội ngũ nhân viên luôn sẵn sàng hỗ trợ gia đình bất kể thời gian nào trong ngày',
  },
  {
    title: 'Không lo phát sinh',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-10 w-10"
      >
        <path
          fillRule="evenodd"
          d="M2.5 4A1.5 1.5 0 0 0 1 5.5V6h18v-.5A1.5 1.5 0 0 0 17.5 4h-15ZM19 8.5H1v6A1.5 1.5 0 0 0 2.5 16h15a1.5 1.5 0 0 0 1.5-1.5v-6ZM3 13.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm4.75-.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    text: 'Từ khâu tiếp nhận cho đến lễ tang và hậu sự, tất cả đều được chuẩn bị chu đáo và minh bạch về chi phí',
  },
  {
    title: 'Chuyên nghiệp và tận tâm',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-10 w-10"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-6.5 6.326a6.52 6.52 0 0 1-1.5.174 6.487 6.487 0 0 1-5.011-2.36l.49-.98a.423.423 0 0 1 .614-.164l.294.196a.992.992 0 0 0 1.491-1.139l-.197-.593a.252.252 0 0 1 .126-.304l1.973-.987a.938.938 0 0 0 .361-1.359.375.375 0 0 1 .239-.576l.125-.025A2.421 2.421 0 0 0 12.327 6.6l.05-.149a1 1 0 0 0-.242-1.023l-1.489-1.489a.5.5 0 0 1-.146-.353v-.067a6.5 6.5 0 0 1 5.392 9.23 1.398 1.398 0 0 0-.68-.244l-.566-.566a1.5 1.5 0 0 0-1.06-.439h-.172a1.5 1.5 0 0 0-1.06.44l-.593.592a.501.501 0 0 1-.13.093l-1.578.79a1 1 0 0 0-.553.894v.191a1 1 0 0 0 1 1h.5a.5.5 0 0 1 .5.5v.326Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    text: 'Cung cấp mọi nghi thức tôn giáo theo truyền thống, phù hợp với từng gia đình và đức tin',
  },
  {
    title: 'Hỗ trợ tư vấn miễn phí',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-10 w-10"
      >
        <path d="M3.505 2.365A41.369 41.369 0 0 1 9 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 0 0-.577-.069 43.141 43.141 0 0 0-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 0 1 5 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914Z" />
        <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 0 0 1.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0 0 14 6Z" />
      </svg>
    ),
    text: 'Được tư vấn rõ ràng về quy trình, thủ tục và lựa chọn phù hợp nhất hoàn toàn miễn phí',
  },
  {
    title: 'Đội ngũ chuyên nghiệp',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-10 w-10"
      >
        <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
      </svg>
    ),
    text: 'Nhân viên phục vụ chuyên nghiệp, thấu hiểu và cư xử đầy tôn trọng với người đã khuất và thân nhân.',
  },
  {
    title: 'Minh bạch và rõ ràng',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-10 w-10 text-gray-700"
      >
        <path
          fillRule="evenodd"
          d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.75Zm4.196 5.954a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    text: 'Mọi chi phí đều được thông báo rõ ràng, không có khoản phát sinh nào ngoài hợp đồng đã ký kết.',
  },
];

export function BenefitCards() {
  const duplicatedItems = [...benefits, ...benefits];
  return (
    <div className="auto-slider-container">
      <div className="auto-slider-track py-2">
        {duplicatedItems.map(item => (
          <div key={uuidv4()} className="slider-card mx-2 bg-white rounded-xl shadow p-5">
          <div className="mb-3 flex justify-center text-gray-600">
              {item.icon}
          </div>
          <h3 className="font-semibold text-gray-800 mb-1 text-lg">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.text}</p>
        </div>
        
        ))}
      </div>
    </div>
  );
}
