import { ICharacter } from "../../utils/types";

export const createCharacterCSV = (data: ICharacter[]): string => {
    const titles = [
        "birth",
        "death",
        "gender",
        "hair",
        "height",
        "name",
        "race",
        "realm",
        "spouse",
        "wikiUrl",
        "_id",
    ].join(";");

    const csv = [];
    csv.push(titles);

    data.forEach((item) => {
        const row = Object.keys(item)
            .map((key) => item[key as keyof ICharacter] ?? `Unknown`)
            .join(";");
        csv.push(row);
    });

    const values = csv.join("\r\n");

    return values;
};
