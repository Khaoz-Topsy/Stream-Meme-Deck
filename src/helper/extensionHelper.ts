export const getExtension = (filename: string): string | null => {
    const re = /(?:\.([^.]+))?$/;

    try {
        const regexMatch = re.exec(filename);
        if (regexMatch == null) return null;

        return regexMatch[1];
    } catch {
        return null;
    }
}