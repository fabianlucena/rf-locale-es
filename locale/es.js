'use strict';

export default {
    messages: {
        yesexpr: '^([sS][iI]|[sS])',
        noexpr:  '^([nN][oO]|[nN])',
    },

    numeric: {
        decimal_point:    ',',
        thousands_sep:    '.',
        grouping:         3,
    },
    
    time: {
        _: 'For use in %a',
        abday: [
            'Do.',
            'Lu.',
            'Ma.',
            'Mi.',
            'Ju.',
            'Vi.',
            'Sa.',
        ],
    
        _: 'For use in %A',
        day: [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado',
        ],
    
        _: 'For use in %b',
        abmon: [
            'Ene.',
            'Feb.',
            'Mar.',
            'Abr.',
            'May.',
            'Jun.',
            'Jul.',
            'Ago.',
            'Sep.',
            'Oct.',
            'Nov.',
            'Dic.',
        ],
    
        _: 'For use in %B',
        mon: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
        ],
    
        _: 'Equivalent of AM/PM (%p)',
        am_pm: ['AM', 'PM'],
    
        _: 'Appropriate date and time representation (%c) "%a %b %e %H:%M:%S %Y"',
        d_t_fmt: '%A %e de %B de %Y %H:%M:%S',
            
        _: 'Appropriate date representation (%x) "%d/%m/%Y"',
        d_fmt: '%d/%m/%Y',
    
        _: 'Appropriate time representation (%X) "%H:%M:%S"',
        t_fmt: '%H:%M:%S',
    
        _: 'Appropriate 12-hour time representation (%r) "%I:%M:%S %p"',
        t_fmt_ampm: '%I:%M:%S %p',
    
        date_fmt: '%F %Z',
    },

    monetary: {
        int_curr_symbol:      'EUR ',
        currency_symbol:      '€',
        mon_decimal_point:    ',',
        mon_thousands_sep:    '.',
        mon_grouping:         [3, 3],
        positive_sign:        '',
        negative_sign:        '-',
        int_frac_digits:      2,
        frac_digits:          2,
        p_cs_precedes:        1,
        p_sep_by_space:       1,
        n_cs_precedes:        1,
        n_sep_by_space:       1,
        p_sign_posn:          1,
        n_sign_posn:          1,
        int_p_cs_precedes:    1,
        int_p_sep_by_space:   1,
        int_n_cs_precedes:    -1,
        int_n_sep_by_space:   -1,
        int_p_sign_posn:      -1,
        int_n_sign_posn:      -1,
    },
};