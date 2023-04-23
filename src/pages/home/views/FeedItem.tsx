import cn from 'clsx';
import {
  FeedComment,
  FeedImg,
  FeedUserInfo,
} from '../../../components/feedItems/';

export function FeedItem() {
  return (
    <article
      className={cn(
        'feedCon border-none py-[20px]',
        'md:border-solid md:border-[#e6e6e6] md:border-b-[1px]',
      )}>
      {/* top-(logo, id) */}
      <FeedUserInfo />
      {/* top-(logo, id) */}
      {/* middle-(img) */}
      <FeedImg />
      {/* middle-(img) */}
      {/* bottom-(like, heart, dm, des, more, comment) */}
      <FeedComment />
      {/* bottom-(like, heart, dm, des, more, comment) */}
    </article>
  );
}
