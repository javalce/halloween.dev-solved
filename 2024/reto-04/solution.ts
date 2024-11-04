function findTheKiller(whisper: string, suspects: string[]): string {
  const escapedWhisper = whisper.replaceAll('~', '\\w');
  const regex = new RegExp(`^${escapedWhisper}`, 'i');

  return suspects.filter((suspect) => regex.test(suspect)).join(',');
}

export { findTheKiller };
