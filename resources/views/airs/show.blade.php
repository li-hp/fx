@extends('layouts.app')

@section('content')

<div class="container">
  <div class="col-md-10 offset-md-1">
    <div class="card ">
      <div class="card-header">
        <h1>Air / Show #{{ $air->id }}</h1>
      </div>

      <div class="card-body">
        <div class="card-block bg-light">
          <div class="row">
            <div class="col-md-6">
              <a class="btn btn-link" href="{{ route('airs.index') }}"><- Back</a>
            </div>
            <div class="col-md-6">
              <a class="btn btn-sm btn-warning float-right mt-1" href="{{ route('airs.edit', $air->id) }}">
                Edit
              </a>
            </div>
          </div>
        </div>
        <br>

        <label>Co2</label>
<p>
	{{ $air->co2 }}
</p> <label>Voc</label>
<p>
	{{ $air->voc }}
</p> <label>Tem</label>
<p>
	{{ $air->tem }}
</p> <label>Hum</label>
<p>
	{{ $air->hum }}
</p> <label>Pm25</label>
<p>
	{{ $air->pm25 }}
</p> <label>Ch2o</label>
<p>
	{{ $air->ch2o }}
</p>
      </div>
    </div>
  </div>
</div>

@endsection
