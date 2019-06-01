import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  animate,
  group,
  state,
} from '@angular/animations';

export const fadeIn = trigger('detailEnter', [
  transition('HomePage => DetailPage', [
    query(
      ':enter',
      style({
        transform: 'translateX(100%) scale(0)',
        opacity: 0,
      }),
      {
        optional: true,
      },
    ),
    query(
      ':enter',
      animate(
        '300ms ease',
        style({ transform: 'translateX(0) scale(1)', opacity: 1 }),
      ),
      {
        optional: true,
      },
    ),
  ]),
  transition('DetailPage => HomePage', [
    query(
      ':enter',
      style({
        opacity: 0,
      }),
      {
        optional: true,
      },
    ),
    query(':enter', animate('300ms ease', style({ opacity: 1 })), {
      optional: true,
    }),
  ]),
]);
