import { CanActivateChildFn } from '@angular/router';

export const authChildGuardGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
