export async function setCredentials(id: string, isAdmin: boolean) {
  localStorage.setItem('userId', id);
  localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
}

export function getCredentials() {
  const userId = localStorage.getItem('userId');
  const isAdmin = localStorage.getItem('isAdmin');
  if (userId && isAdmin) {
    return { 
      id: userId,
      isAdmin: isAdmin === 'true' ? true : false,
    };
  }
  return null;
}

export async function resetCredentials() {
  localStorage.clear();
}
