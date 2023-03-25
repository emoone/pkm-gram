import { useParams } from 'react-router-dom';
import ProfileImage from './views/ProfileImage';
import cn from 'clsx';
import { useState } from 'react';
import PostCard from '../../components/post/PostCard';
import ProfileContent from './views/ProfileContent';

export default function ProfileComponent() {
  const { loginId } = useParams();

  const [checked] = useState('posts');

  return (
    <div className="max-w-[975px] mx-auto -tracking-[1px] mb-14 mt-14">
      <div className="flex flex-col gap-5 justify-center md:flex-row md:gap-10">
        <ProfileImage
          imagePath={'https://intro.kwkang.dev/img/my.02d7c309.jpeg'}
        />
        <ProfileContent loginId={loginId} />
      </div>
      <div className="border-t-[1px] flex flex-col">
        <ul className="flex justify-center items-center">
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
        <div className="grid grid-cols-3 gap-2">
          {Array.from(Array(20)).map((_, i) => (
            <PostCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
