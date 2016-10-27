<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Example extends CI_Controller {

	public function index()
	{
		$data = array('list' => array(
			'eat',
			'sleep',
			'coding'
		));
		$this->ci_smarty->view('front/page/index.tpl', $data);
	}
}
