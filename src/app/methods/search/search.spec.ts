import { search } from './search';

describe('should search an array of', () => {
  let arrayToBeTracked: any[];
  let textSearched: string;

  describe('strings', () => {

    beforeEach(() => {
      arrayToBeTracked = [
        'Alishba Miranda',
        'Mohammod Mcgee',
        'Lorelai Galvan',
        'Alberto Pacheco',
        'Malaika Frey',
        'Rihanna Buckner'
      ];
    });

    test('with the exatly data name', () => {
      textSearched = 'Rihanna Buckner';
  
      expect(
        search(arrayToBeTracked, textSearched)
      ).toEqual(
        [arrayToBeTracked[5]]
      );    
    });

    test('with the part of the data name', () => {
      textSearched = 'Mira';
  
      expect(
        search(arrayToBeTracked, textSearched)
      ).toEqual(
        [arrayToBeTracked[0]]
      );    
    });

  });

  describe('Objects', () => {

    test('with only objects', () => {
      textSearched = 'pubc';
      arrayToBeTracked = [
        {
          hjads: 321,
          jsadioa: 'kabanga'
        },
        {
          hjads: 123,
          jsadioa: 'something',
          jsaiodji: {
            asiioda: 'abc',
            kkfdsf: textSearched
          }
        }
      ]
  
      expect(
        search(arrayToBeTracked, textSearched)
      ).toEqual(
        [arrayToBeTracked[1]]
      );
    });

    describe('with all type of data and', () => {

      beforeEach(() => {
        arrayToBeTracked = [
          'Alishba Miranda',
          {
            name: 'Mohammod Mcgee',
          },
          {
            names: [
              'Lorelai Galvan',
              {
                otherNames: [
                  'Malaika Frey',
                  'Rihanna Buckner'
                ]
              }
            ]
          },
          [
            'Derek Stott',
            'Orion Reader',
            'Alyssia Pickett',
            'Jaxx Tate'
          ],
          321
        ];
      });

      test('return first item', () => {
        textSearched = 'Alishba Miranda';

        expect(
          search(arrayToBeTracked, textSearched)
        ).toEqual(
          [arrayToBeTracked[0]]
        );
      });

      test('return second item', () => {
        textSearched = 'Mohammod Mcgee';

        expect(
          search(arrayToBeTracked, textSearched)
        ).toEqual(
          [arrayToBeTracked[1]]
        );
      });

      test('return third item', () => {
        textSearched = 'Malaika Frey';

        expect(
          search(arrayToBeTracked, textSearched)
        ).toEqual(
          [arrayToBeTracked[2]]
        );
      });

      test('return fourth item', () => {
        textSearched = 'Derek Stott';

        expect(
          search(arrayToBeTracked, textSearched)
        ).toEqual(
          [arrayToBeTracked[3]]
        );
      });

      test('return empty array', () => {
        textSearched = '321';

        expect(
          search(arrayToBeTracked, textSearched)
        )
        .toEqual([]);
      });
    });
  });
});
