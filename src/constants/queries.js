export const fetchAllWords = `
    SELECT *
    FROM words
    WHERE is_deleted = 0
    ORDER BY id DESC;
`;

export const fetchAWord = `
    SELECT * FROM words where word = 'newWord' and is_deleted = 0;
`;

export const createAWord = `
    INSERT INTO words (word, definition) VALUES ('new Word', 'new definition')
`;

export const updateAWord = `
    UPDATE words
    SET word = COALESCE('something', word),
    definition = COALESCE('long definition', definition)
    WHERE id = ?
`;

export const deleteAWord = `
    UPDATE words
    SET is_deleted = 1
    WHERE id = 236;
`;
