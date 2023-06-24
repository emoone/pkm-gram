import PostCard from '../../components/post/PostCard';
import cn from 'clsx';
import { openPostCardModal } from '../../components/layer/postCard';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ProfileContent, ProfileImage } from './views';

export default function ProfileComponent() {
  const { loginId } = useParams();

  const [checked, setChecked] = useState('posts');

  // TODO: 임시 이미지 샘플 삭제 예정
  const smapleImg = [
    'https://images.unsplash.com/photo-1680836944107-adbc72efbfd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1681906374707-40c5f2c7c8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1681895032142-1d3679126543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1681472852992-657d59b0d4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1681468609616-37ac8c4eb442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1681398837486-6ee784970546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1682251167570-db70af09f7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1682314170732-2de75372c338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1682074900673-8a04d14e0b92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1682159316144-8c3552d685b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1681888899354-ed09f939bfd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1681889519736-7f22512f4c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1681798394305-4a51dd898cf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1681509590237-50b706b9dfec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1681312022365-e3c99bb075aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc3fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  ];

  return (
    <div className="max-w-[975px] mx-auto -tracking-[1px] mb-14 mt-14">
      <div className="flex flex-col items-start justify-center gap-5 md:flex-row md:gap-10">
        <ProfileImage imagePath="/images/icons/github-mark.png" />
        <ProfileContent loginId={loginId} />
      </div>
      <div className="border-t-[1px] flex flex-col">
        <ul className="flex items-center justify-center">
          <li
            className={cn('p-10 text-sm font-semibold flex flex-row gap-2', {
              'border-t-[2px] border-black': checked === 'posts',
            })}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24">
              <path d="M4 4v20h20v-20h-20zm18 18h-16v-13h16v13zm-3-3h-10v-1h10v1zm0-3h-10v-1h10v1zm0-3h-10v-1h10v1zm2-11h-19v19h-2v-21h21v2z" />
            </svg>
            게시물
          </li>
        </ul>
        <div className="grid grid-cols-3 grid-rows-1 gap-[3px] md:gap-[4px]">
          {smapleImg.map((item, index: number) => {
            return (
              <PostCard
                key={index}
                imgPath={item}
                onClick={() => {
                  console.log('layer');
                  openPostCardModal({ imgPath: item });
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
