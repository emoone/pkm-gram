import cn from 'clsx';

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
                <a className="text-[#003569]" href={item.link}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
        {/* listArea */}
        {/* copyRightArea */}
        <div className="copyRight">
          <span className="copyright">© 2017 Vietgram</span>
        </div>
        {/* copyRightArea */}
      </div>
    </footer>
  );
}
const footerArrData = [
  { name: 'About Us', link: '/about' },
  { name: 'Support', link: '/support' },
  { name: 'Blog', link: '/blog' },
  { name: 'Press', link: '/press' },
  { name: 'Api', link: '/api' },
  { name: 'Jobs', link: '/job' },
  { name: 'Privacy', link: '/privacy' },
  { name: 'Terms', link: '/terms' },
  { name: 'Directory', link: '/directory' },
  { name: 'Language', link: '/language' },
];
