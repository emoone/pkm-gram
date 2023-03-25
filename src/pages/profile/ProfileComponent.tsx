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
    <div className="max-w-[975px] mx-auto -tracking-[1px] mb-14">
      <div className="flex flex-row gap-10">
        <ProfileImage
          imagePath={'https://intro.kwkang.dev/img/my.02d7c309.jpeg'}
        />
        <ProfileContent loginId={loginId} />
      </div>
      <div className="border-t-[1px] flex flex-col">
        <ul className="flex justify-center items-center">
          <li
            className={cn('p-10 text-sm font-semibold', {
              'border-t-[2px] border-black': checked === 'posts',
            })}>
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
