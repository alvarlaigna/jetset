import { fromJS, Map } from 'immutable';

const { managesState } = require( '../store' );

describe( 'store / managesState', () => {

  describe( 'setState', () => {

    test( 'sets flat string state', () => {
      const { setState } = managesState();
      const key = 'foo';
      const val = 'bar';
      const expected = Map({ [key]: val });
      const actual = setState( key, val );
      expect( expected ).toEqual( actual );
    });

    test( 'sets flat number state', () => {
      const { setState } = managesState();
      const key = 'foo';
      const val = 1;
      const expected = Map({ [key]: val });
      const actual = setState( key, val );
      expect( expected ).toEqual( actual );
    });

    test( 'sets flat object state', () => {
      const { setState } = managesState();
      const key = 'foo';
      const val = { bar: 'baz' };
      const expected = Map({ [key]: fromJS( val ) });
      const actual = setState( key, val );
      expect( expected ).toEqual( actual );
    });

    test( 'sets flat array state', () => {
      const { setState } = managesState();
      const key = 'foo';
      const val = [ 'bar', 1, null ];
      const expected = Map({ [key]: fromJS( val ) });
      const actual = setState( key, val );
      expect( expected ).toEqual( actual );
    });

    test( 'sets flat mixed state', () => {
      const { setState } = managesState();
      const key = 'foo';
      const val = { bar: [ 'bar', 1, null, { bang: 'foo' } ], baz: 'bang' };
      const expected = Map({ [key]: fromJS( val ) });
      const actual = setState( key, val );
      expect( expected ).toEqual( actual );
    });

    test( 'sets nested state', () => {
      const { setState } = managesState();
      const key = [ 'foo', 'bar' ];
      const val = 'baz';
      const map = Map();
      const expected = map.setIn( key, val );
      const actual = setState( key, val );
      expect( expected ).toEqual( actual );
    });
  });

  describe( 'getState', () => {

    test( 'gets flat state', () => {
      const { getState, setState } = managesState();
      const key = 'foo';
      const val = 'bar';
      setState( key, val );
      const expected = val;
      const actual = getState( key );
      expect( expected ).toEqual( actual );
    });

    test( 'gets nested state', () => {
      const { getState, setState } = managesState();
      const key = [ 'foo', 'bar' ];
      const val = { bar: 'baz' };
      setState( key, val );
      const expected = Map( val );
      const actual = getState( key );
      expect( expected ).toEqual( actual );
    });

    test( 'returns raw state if no key is passed', () => {
      const { getState, setState } = managesState();
      const key = 'foo';
      const val = 'bar';
      setState( key, val );
      const expected = Map({[key]: val});
      const actual = getState();
      expect( expected ).toEqual( actual );
    });
  });
});
