//casting to number
alert( null >= 0 );
alert( null > 0 );
alert( null == 0 );

alert( undefined > 0 );
alert( undefined == 0 );
alert( undefined < 0 );

alert( +true );
alert( +false );

//casting to boolean
alert( 1 == "\n0\n" );
if ("\n0\n") {
    alert( "true, совсем не как 0!" );
}