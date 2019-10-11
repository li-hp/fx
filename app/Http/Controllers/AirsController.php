<?php

namespace App\Http\Controllers;

use App\Models\Air;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\AirRequest;

class AirsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }

	public function index()
	{
		$airs = Air::paginate();
		return view('airs.index', compact('airs'));
	}

    public function show(Air $air)
    {
		$maxid = Air::max('id') - 10;
        $co2_forchart = Air::where('id', '>', $maxid)->pluck('CO2');
        $voc_forchart = Air::where('id', '>', $maxid)->pluck('VOC');
        $pm25_forchart = Air::where('id', '>', $maxid)->pluck('PM25');
        $ch2o_forchart = Air::where('id', '>', $maxid)->pluck('CH2O');

        $humi = Air::pluck('HUMI')->last();
        $temp = Air::pluck('TEMP')->last();

        return [$co2_forchart, $voc_forchart,
		$pm25_forchart, $ch2o_forchart, $humi, $temp];
		
    }

	public function create(Air $air)
	{
		return view('airs.create_and_edit', compact('air'));
	}

	public function store(AirRequest $request)
	{
		$air = Air::create($request->all());
		return redirect()->route('airs.show', $air->id)->with('message', 'Created successfully.');
	}

	public function edit(Air $air)
	{
        $this->authorize('update', $air);
		return view('airs.create_and_edit', compact('air'));
	}

	public function update(AirRequest $request, Air $air)
	{
		$this->authorize('update', $air);
		$air->update($request->all());

		return redirect()->route('airs.show', $air->id)->with('message', 'Updated successfully.');
	}

	public function destroy(Air $air)
	{
		$this->authorize('destroy', $air);
		$air->delete();

		return redirect()->route('airs.index')->with('message', 'Deleted successfully.');
	}
}