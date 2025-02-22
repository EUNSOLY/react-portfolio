import React, { useState } from 'react';
import { tm } from '../../utils/twMerge';
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMapPin,
  IconBrandDiscord,
  IconSend,
  IconSchool,
} from '@tabler/icons-react';

const ConnectPage = () => {
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // FIXME : 메일을 바로 보낼 수 있는 로직 추가 예정
    const mailtoLink = `mailto:dmsthf9596@gmail.com?subject=Contact from ${emailForm.name}&body=${emailForm.message}%0D%0A%0D%0AFrom: ${emailForm.email}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <IconMail className="w-6 h-6" />,
      label: 'Email',
      value: 'dmsthf9596@gmail.com',
    },
    {
      icon: <IconMapPin className="w-6 h-6" />,
      label: 'Location',
      value: '대전',
    },
  ];

  const socialLinks = [
    {
      icon: <IconBrandGithub className="w-8 h-8" />,
      url: 'https://github.com/EUNSOLY',
    },
    {
      icon: <IconSchool className="w-8 h-8" />,
      url: 'https://soly-log.tistory.com/',
    },
  ];

  return (
    <div className={tm('h-full', 'flex flex-col items-center justify-center', 'select-none')}>
      <h2
        className={tm(
          'text-3xl sm:text-4xl md:text-5xl font-bold', // 반응형 폰트 크기
          'text-center px-4 mb-8'
        )}
      >
        함께할 기회를 찾고 있습니다!
      </h2>

      <div
        className={tm(
          'w-full',
          'max-w-[95%] sm:max-w-[85%] md:max-w-2xl', // 반응형 최대 너비
          'bg-white/5 backdrop-blur-sm',
          'rounded-2xl shadow-lg',
          'p-4 sm:p-6 md:p-5', // 반응형 패딩
          'space-y-4 sm:space-y-6' // 반응형 간격
        )}
      >
        <div className="space-y-3 sm:space-y-4">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className={tm(
                'flex items-center gap-3 sm:gap-4',
                'rounded-xl',
                'transition-all duration-300',
                'hover:bg-white/5',
                'max-sm:flex-wrap' // 모바일에서 필요시 줄바꿈
              )}
            >
              <span className="text-[#00b2ff] min-w-[24px]">{item.icon}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="text-base sm:text-lg text-white break-all">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="grid gap-3 sm:gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="이름"
              className={tm(
                'w-full p-2 sm:p-3 rounded-lg',
                'bg-white/10',
                'border border-white/20',
                'text-white placeholder-gray-400',
                'focus:outline-none focus:border-[#00b2ff]',
                'transition duration-300',
                'text-sm sm:text-base'
              )}
              value={emailForm.name}
              onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="이메일"
              className={tm(
                'w-full p-2 sm:p-3 rounded-lg',
                'bg-white/10',
                'border border-white/20',
                'text-white placeholder-gray-400',
                'focus:outline-none focus:border-[#00b2ff]',
                'transition duration-300',
                'text-sm sm:text-base'
              )}
              value={emailForm.email}
              onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
              required
            />
          </div>
          <textarea
            placeholder="내용을 입력해주세요."
            rows={4}
            className={tm(
              'w-full p-2 sm:p-3 rounded-lg',
              'bg-white/10',
              'border border-white/20',
              'text-white placeholder-gray-400',
              'focus:outline-none focus:border-[#00b2ff]',
              'transition duration-300',
              'resize-none',
              'text-sm sm:text-base'
            )}
            value={emailForm.message}
            onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
            required
          />
          <button
            type="submit"
            className={tm(
              'w-full p-2 sm:p-3 rounded-lg',
              'bg-[#00b2ff] hover:bg-[#0090cc]',
              'text-white font-semibold',
              'transition duration-300',
              'flex items-center justify-center gap-2',
              'text-sm sm:text-base'
            )}
          >
            <IconSend className="w-4 h-4 sm:w-5 sm:h-5" />
            전송
          </button>
        </form>
      </div>

      <div className={tm('flex gap-4 sm:gap-6 mt-2', 'text-[#00b2ff]')}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={tm('transition-transform duration-300', 'hover:scale-125 hover:text-purple-500')}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ConnectPage;
