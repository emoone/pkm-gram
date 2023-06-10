import cn from 'clsx';

enum MsgTypes {
  DANGER = 'danger',
  ERROR = 'error',
  WARNING = 'warning',
  INFORMATION = 'infomation',
  SUCCESS = 'success',
}
interface PropsType {
  type?: MsgTypes;
  msg?: string;
}
// --primary: #0676ed;
// --background: #222b45;
// --warning: #f2a600;
// --success: #12c99b;
// --error: #e41749;

/**
 * 상태 메세지 표시용 Component
 * Danger/Error (Red)
 * Warning (Yellow/orange)
 * Information (Blue)
 * Success (Green)
 * @param props
 * @returns
 */
export function AlertMsgComponent(props: PropsType) {
  const { type = MsgTypes.ERROR, msg = '' } = props;

  if (!msg) return null;

  return (
    <p
      className={cn('font-semibold text-[.7rem]', {
        'text-[#e41749]': type === MsgTypes.ERROR || type === MsgTypes.DANGER,
        'text-[#f2a600]': type === MsgTypes.WARNING,
        'text-[#12c99b]': type === MsgTypes.INFORMATION,
        'text-[#0676ed]': type === MsgTypes.SUCCESS,
      })}>
      {msg}
    </p>
  );
}
