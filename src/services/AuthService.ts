export async function setCredentials(id: string, isAdmin: boolean) {
  window.sessionStorage.setItem('userId', id);
  window.sessionStorage.setItem('isAdmin', JSON.stringify(isAdmin));
}

export function getCredentials() {
  const userId = window.sessionStorage.getItem('userId');
  const isAdmin = window.sessionStorage.getItem('isAdmin');
  if (userId && isAdmin) {
    return { 
      id: userId,
      isAdmin: isAdmin === 'true' ? true : false,
    };
  }
  return null;
}

export async function resetCredentials() {
  window.sessionStorage.clear();
}
