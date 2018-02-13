import $ from 'jquery';

export class HelloWorldModule {

  echo() {
    const helloWorld = `
H    H   EEEEE   L        L         OOOO        W       W    OOOO    RRRR     L        DDDDD
H    H   E       L        L        O    O        W     W    O    O   R   R    L        D    D
HHHHHH   EEEEE   L        L        O    O        W  W  W    O    O   RRRR     L        D     D
H    H   E       L        L        O    O        W W W W    O    O   R   R    L        D    D
H    H   EEEEE   LLLLLL   LLLLLL    OOOO          W   W      OOOO    R    R   LLLLLL   DDDDD`;
    $('.message').text(helloWorld);
  }
}
