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

export const slider = trigger('routeAnimations', [
  // transition('HomePage => DetailPage', [
  //   query(':enter', [
  //     style({
  //       opacity: 0,
  //       transform: 'scale(0)',
  //     }),
  //     animate(
  //       '600ms ease',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1)',
  //       }),
  //     ),
  //   ]),
  // ]),
  // transition('DetailPage => HomePage', [
  //   query(':leave', [
  //     style({
  //       // opacity: 1,
  //       transform: 'scale(1)',
  //     }),
  //     animate(
  //       '1000ms ease',
  //       style({
  //         transform: 'scale(0)',
  //       }),
  //     ),
  //   ]),
  // ]),
]);
