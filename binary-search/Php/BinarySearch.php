<?php

/**
 * Class BinarySearch
 */
class BinarySearch {

	private $low;
	private $high;
	private $mid;


	/**
	 * Binary_Search constructor.
	 *
	 * @param array $list
	 */
	public function __construct( array $list = array() ) {
		$this->list = $list;
	}


	/**
	 * @param $value
	 *
	 * @return int
	 */
	public function get( $value ) {
		$sanitized_val = (int) $value;
		$this->reset_vars();

		while ( $this->low <= $this->high ) {
			$this->mid = (int) floor( ( $this->low + $this->high ) / 2 );
			$guess     = (int) $this->list[ $this->mid ];
			if ( $guess === $sanitized_val ) {
				return $this->mid;
			} elseif ( $guess < $sanitized_val ) {
				$this->low = $this->mid + 1;
			} elseif ( $guess > $sanitized_val ) {
				$this->high = $this->mid - 1;
			}
		}

		return -1;
	}


	/**
	 * @return bool
	 */
	private function reset_vars() {
		$this->low  = 0;
		$this->mid  = 0;
		$this->high = $this->high = count( $this->list ) - 1;

		return true;
	}

}

$items = range(0, 100000);
$find = rand(0,100000);
$BinarySearch = new BinarySearch($items);

var_dump($find);
var_dump($BinarySearch->get($find));

