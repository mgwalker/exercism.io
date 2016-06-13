from datetime import date, timedelta
import re

def meetup_day(year, month, targetDay, which):
    day = date(year, month, 1)
    while day.strftime('%A') != targetDay:
        day += timedelta(1)

    match = re.match('^\d+', which)
    if match:
        extraWeeks = int(match.group(0)) - 1
        day += timedelta(7 * extraWeeks)
    elif which == 'teenth':
        while day.day < 13:
            day += timedelta(7)
    elif which == 'last':
        while day.month == month:
            day += timedelta(7)
        day -= timedelta(7)

    if day.month != month or day.year != year:
        raise Exception('That date don\'t exist')

    return day
