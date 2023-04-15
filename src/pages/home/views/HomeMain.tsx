import { FeedItem } from './FeedItem';

export function HomeMain() {
  return (
    <div className="feedItemCon">
      {[...Array(20)].map((item, index) => {
        return <FeedItem key={index} />;
      })}
    </div>
  );
}
