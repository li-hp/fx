@extends('layouts.app')

@section('content')

<div class="container">
  <div class="col-md-10 offset-md-1">
    <div class="card ">

      <div class="card-header">
        <h1>
          Air /
          @if($air->id)
            Edit #{{ $air->id }}
          @else
            Create
          @endif
        </h1>
      </div>

      <div class="card-body">
        @if($air->id)
          <form action="{{ route('airs.update', $air->id) }}" method="POST" accept-charset="UTF-8">
          <input type="hidden" name="_method" value="PUT">
        @else
          <form action="{{ route('airs.store') }}" method="POST" accept-charset="UTF-8">
        @endif

          @include('common.error')

          <input type="hidden" name="_token" value="{{ csrf_token() }}">

          
                <div class="form-group">
                    <label for="co2-field">Co2</label>
                    <input class="form-control" type="text" name="co2" id="co2-field" value="{{ old('co2', $air->co2 ) }}" />
                </div> 
                <div class="form-group">
                    <label for="voc-field">Voc</label>
                    <input class="form-control" type="text" name="voc" id="voc-field" value="{{ old('voc', $air->voc ) }}" />
                </div> 
                <div class="form-group">
                    <label for="tem-field">Tem</label>
                    <input class="form-control" type="text" name="tem" id="tem-field" value="{{ old('tem', $air->tem ) }}" />
                </div> 
                <div class="form-group">
                    <label for="hum-field">Hum</label>
                    <input class="form-control" type="text" name="hum" id="hum-field" value="{{ old('hum', $air->hum ) }}" />
                </div> 
                <div class="form-group">
                    <label for="pm25-field">Pm25</label>
                    <input class="form-control" type="text" name="pm25" id="pm25-field" value="{{ old('pm25', $air->pm25 ) }}" />
                </div> 
                <div class="form-group">
                    <label for="ch2o-field">Ch2o</label>
                    <input class="form-control" type="text" name="ch2o" id="ch2o-field" value="{{ old('ch2o', $air->ch2o ) }}" />
                </div>

          <div class="well well-sm">
            <button type="submit" class="btn btn-primary">Save</button>
            <a class="btn btn-link float-xs-right" href="{{ route('airs.index') }}"> <- Back</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

@endsection
