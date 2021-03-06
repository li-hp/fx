<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// phpinfo测试页面
Route::get('/phpinfo', 'PagessController@phpinfo')->name('phpinfo');
Route::get('/biaogetest', 'PagessController@biaogetest')->name('biaogetest');

//主页
Route::get('/', 'PagessController@index')->name('index');
Route::get('/kongqi', 'PagessController@kongqi')->name('kongqi');
Route::get('/shuizhi', 'PagessController@shuizhi')->name('shuizhi');
Route::get('/guangqiang', 'PagessController@guangqiang')->name('guangqiang');
Route::get('/shushi', 'PagessController@shushi')->name('shushi');
Route::get('/jianshen', 'PagessController@jianshen')->name('jianshen');
Route::get('/yingyang', 'PagessController@yingyang')->name('yingyang');
Route::get('/huiyi', 'PagessController@huiyi')->name('huiyi');
Route::get('/renyuan', 'PagessController@renyuan')->name('huiyi');
Route::get('/test', 'PagessController@test')->name('test');



Route::get('/socketpython/{id}', 'LedsController@socketpython')->name('led.socketpython');
Route::get('/websocket_ppython2','LedsController@websocket_ppython')->name('yiwelink');


Route::get('/airdatashow','AirshowController@airdata')->name('airdata');
Route::resource('airs', 'AirsController', ['only' => ['index', 'show', 'create', 'store', 'update', 'edit', 'destroy']]);

// 采集 2020.03.25
Route::get('/lanju_inside_n', 'CollectController@datathismoment')->name('lanju_inside_n');
Route::get('/lanju_inside_h', 'CollectController@data7hour')->name('lanju_inside_h');
Route::get('/lanju_inside_d', 'CollectController@data7day')->name('lanju_inside_d');
Route::get('/axis', 'CollectController@axis')->name('axis');

// 控制 2020.04.03
Route::get('/light_controller/{id}', 'DevicesController@light')->name('light');
