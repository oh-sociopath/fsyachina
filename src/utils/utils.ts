import { intervalToDuration } from 'date-fns';

export function formatDate(daysOffset: number) {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysOffset + 1);

    const isoBase = targetDate.toISOString().split('T')[0];

    const duration = intervalToDuration({
        start: new Date(),
        end: new Date(isoBase)
    });

    const { years, months, days} = duration;

    return {
        years,
        months,
        days
    }
}
