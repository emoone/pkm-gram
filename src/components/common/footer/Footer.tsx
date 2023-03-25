import cn from 'clsx';
import { footerArrData } from './data/_constance';

export default function Footer() {
  return (
    <footer id="footerCon" className="w-full mx-auto max-w-[900px] ">
      <div
        className={cn(
          'contentInner flex justify-center items-center flex-col',
          'md:justify-between md:flex-row md:px-5',
        )}>
        {/* listArea */}
        <ul className="listCon flex items-center justify-center flex-wrap gap-x-[10px]">
          {footerArrData.map((item, index) => {
            return (
              <li key={`${item.name}-${index}`}>
                <a className="text-[#003569] font-medium" href={item.link}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
        {/* listArea */}
        {/* copyRightArea */}
        <div className="copyRight text-[#999] font-medium text-15">
          <span className="copyright">© 2017 Vietgram</span>
        </div>
        {/* copyRightArea */}
      </div>
    </footer>
  );
}
