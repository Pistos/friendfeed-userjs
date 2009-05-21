// ==UserScript==
// @name          FriendFeed Nicks
// @namespace     http://purepistos.net/userjs
// @description   This UserJS changes full names to nicknames on friendfeed.com .
// @include       http://www.friendfeed.com/*
// @include       http://friendfeed.com/*
// ==/UserScript==

// by: Pistos
// Licence: MIT licence
// Copyright (c) Pistos 2009


( function() {
    $( 'div.name > a' ).each( function() {
        if( $(this).text().indexOf( ' ' ) > -1 ) {
            $(this).text( $(this).attr( 'href' ).substr( 1 ) );
        }
    } );
} )();