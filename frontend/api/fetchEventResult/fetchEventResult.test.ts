import fetchEventResult from './fetchEventResult';

describe('fetchEventResult', () => {
  it('should return a valid event result', async () => {
    const eventMetaData = {
      "name": "Leangen AK Seriestevne",
      "federation": "NVF",
      "date": "2023-01-07",
      "id": "58.csv"
    }
    const result = await fetchEventResult(eventMetaData);
    expect(result).toEqual(
      {"data": [{"best_cj": 85, "best_snatch": 66, "bodyweight": 71, "cj_1": 81, "cj_2": 83, "cj_3": 85, "country": "NVF", "date": "2023-01-07", "event": "Leangen AK Seriestevne", "gender": "Women's Senior 71Kg", "instagram": "", "lifter_name": "Cecilie Tomassen", "sinclair": 184.95087, "snatch_1": 64, "snatch_2": 66, "snatch_3": -68, "total": 151}, {"best_cj": 81, "best_snatch": 60, "bodyweight": 64, "cj_1": 78, "cj_2": 81, "cj_3": 0, "country": "NVF", "date": "2023-01-07", "event": "Leangen AK Seriestevne", "gender": "Women's Senior 64Kg", "instagram": "", "lifter_name": "Celine Dorothea Opdal", "sinclair": 183.05206, "snatch_1": 60, "snatch_2": -62, "snatch_3": 0, "total": 141}, {"best_cj": 85, "best_snatch": 0, "bodyweight": 76, "cj_1": 85, "cj_2": -86, "cj_3": -86, "country": "NVF", "date": "2023-01-07", "event": "Leangen AK Seriestevne", "gender": "Women's Senior 76Kg", "instagram": "", "lifter_name": "Live Wahl Gellein", "sinclair": 100.61311, "snatch_1": -67, "snatch_2": -67, "snatch_3": -67, "total": 85}, {"best_cj": 87, "best_snatch": 69, "bodyweight": 76, "cj_1": 85, "cj_2": 87, "cj_3": -90, "country": "NVF", "date": "2023-01-07", "event": "Leangen AK Seriestevne", "gender": "Women's Senior 76Kg", "instagram": "", "lifter_name": "Nadine Ohla", "sinclair": 184.65465, "snatch_1": 65, "snatch_2": 69, "snatch_3": -71, "total": 156}, {"best_cj": 0, "best_snatch": 0, "bodyweight": 96, "cj_1": -120, "cj_2": -128, "cj_3": -131, "country": "NVF", "date": "2023-01-07", "event": "Leangen AK Seriestevne", "gender": "Men's Senior 96Kg", "instagram": "", "lifter_name": "Peder Lindsetmo", "sinclair": 0, "snatch_1": -105, "snatch_2": -105, "snatch_3": -105, "total": 0}, {"best_cj": 84, "best_snatch": 65, "bodyweight": 71, "cj_1": 85, "cj_2": 84, "cj_3": -88, "country": "NVF", "date": "2023-01-07", "event": "Leangen AK Seriestevne", "gender": "Women's Senior 71Kg", "instagram": "", "lifter_name": "Signe Høstmark", "sinclair": 182.50119, "snatch_1": 63, "snatch_2": 65, "snatch_3": -66, "total": 149}, {"best_cj": 130, "best_snatch": 110, "bodyweight": 96, "cj_1": 130, "cj_2": 0, "cj_3": 0, "country": "NVF", "date": "2023-01-07", "event": "Leangen AK Seriestevne", "gender": "Men's Senior 96Kg", "instagram": "", "lifter_name": "Thomas Malmo", "sinclair": 270.29492, "snatch_1": 100, "snatch_2": 105, "snatch_3": 110, "total": 240}, {"best_cj": 115, "best_snatch": 0, "bodyweight": 81, "cj_1": 115, "cj_2": -118, "cj_3": -118, "country": "NVF", "date": "2023-01-07", "event": "Leangen AK Seriestevne", "gender": "Men's Senior 81Kg", "instagram": "", "lifter_name": "Vegard Vikane", "sinclair": 139.79588, "snatch_1": -97, "snatch_2": -97, "snatch_3": -97, "total": 115}], "size": 8}
      )
  });
});