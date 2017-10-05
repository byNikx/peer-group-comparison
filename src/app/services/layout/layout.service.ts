import { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];

@Injectable()
export class LayoutService  implements OnDestroy{

	activeBreakpoint = new BehaviorSubject<string>(null);
	watcher: Subscription;
	constructor(private media: ObservableMedia) { 

		this.watcher = media.subscribe((change: MediaChange) => {

			let bp = this.detectBreakpoint( 
	    		BREAKPOINTS.filter((breakpoint)=>{
		  			return change.mqAlias == breakpoint;
		  		})
	    	);
	    	this.activeBreakpoint.next(bp);  
	    });

	}


	detectBreakpoint(breakpoints): string{
		if(Object.prototype.toString.call( breakpoints ) === '[object Array]'){
			
			if(breakpoints.length === 1){
	  			return breakpoints.shift();
	  		} else {
	  			return null;
	  		}

	  	}else{
  			return null;
  		}
  	}

  	getActiveBreakpoint(){
  		return this.activeBreakpoint;
  	}

  	isXtraSmall(){
  		return this.media.isActive('xs');
  	}

  	isSmall(){
  		return this.media.isActive('sm');
  	}

  	isMedium(){
  		return this.media.isActive('md');
  	}

  	isLarge(){
  		return this.media.isActive('lg');
  	}

  	isXtraLarge(){
  		return this.media.isActive('xl');
  	}
	
	ngOnDestroy() {
	    this.watcher.unsubscribe();
	}

}
