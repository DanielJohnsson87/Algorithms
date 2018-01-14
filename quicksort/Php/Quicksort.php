<?php
function quicksort( $array ) {

	if ( count( $array ) < 2 ) {
		return $array;
	}

	$pivot   = $array[0];
	$smaller    = array();
	$greater = array();
	for ( $i = 1; $i < count( $array ); $i ++ ) {
		if ( $array[ $i ] < $pivot ) {
			$smaller[] = $array[ $i ];
		} else {
			$greater[] = $array[ $i ];
		}
	}

	return array_merge( quicksort( $smaller ), array( $pivot ), quicksort( $greater ) );

}

$unsorted = array( 43, 21, 2, 1, 9, 24, 99, 23, 8, 7, 114, 92, 5 );
$sorted   = quicksort( $unsorted );
var_dump( $sorted );
