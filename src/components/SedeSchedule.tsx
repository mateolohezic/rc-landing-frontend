import { ScheduleRow } from '@/data/sedes';

type DayKey = 'lun' | 'mar' | 'mie' | 'jue' | 'vie' | 'sab';

const WEEKDAYS: { key: DayKey; label: string }[] = [
    { key: 'lun', label: 'L' },
    { key: 'mar', label: 'M' },
    { key: 'mie', label: 'X' },
    { key: 'jue', label: 'J' },
    { key: 'vie', label: 'V' },
];

interface Props {
    schedule: ScheduleRow[];
}

export function SedeSchedule({ schedule }: Props) {
    const hasSab = schedule.some(row => (row.sab?.length ?? 0) > 0);
    const days = hasSab ? [...WEEKDAYS, { key: 'sab' as DayKey, label: 'S' }] : WEEKDAYS;

    return (
        <div className="glass-card overflow-hidden">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-white/[0.08]">
                        <th className="py-3 pl-4 pr-2 w-[46px]" />
                        {days.map(d => (
                            <th
                                key={d.key}
                                className="py-3 px-1 text-center text-[11px] font-bold tracking-widest text-white/40"
                            >
                                {d.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((row, i) => (
                        <tr
                            key={i}
                            className={`border-b border-white/[0.04] last:border-0 ${i % 2 !== 0 ? 'bg-white/[0.02]' : ''}`}
                        >
                            <td className="py-3 pl-4 pr-2 text-red-400 font-bold text-[11px] font-mono whitespace-nowrap align-top">
                                {row.time}
                            </td>
                            {days.map(d => (
                                <td key={d.key} className="py-3 px-1 text-center align-top">
                                    {(row[d.key]?.length ?? 0) > 0 ? (
                                        <div className="flex flex-col gap-0.5">
                                            {row[d.key]!.map((clase, j) => (
                                                <span
                                                    key={j}
                                                    className="text-[11px] text-white/80 leading-tight break-words hyphens-auto"
                                                >
                                                    {clase}
                                                </span>
                                            ))}
                                        </div>
                                    ) : (
                                        <span className="text-white/15 text-xs">—</span>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
