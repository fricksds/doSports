package com.treinamento.dosports.controller;

import com.treinamento.dosports.dto.LoginDTO;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Renan Fricks
 */
@RestController
@RequestMapping("/login")
@Log4j2
public class LoginController {
    
    private static final String USERNAME = "fricksds";
    private static final String PASSWORD = "Dragao@22";
    
    @Value("${message.login.success}")
    private String LOGIN_SUCCESS_MESSAGE;
    
    @Value("${message.login.failed}")
    private String LOGIN_FAILED_MESSAGE;
    
    
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity login(@RequestBody LoginDTO login) {
        boolean access = false;
        
        if(login.getUsername().equals(USERNAME) && login.getPassword().equals(PASSWORD)) {
            log.info(LOGIN_SUCCESS_MESSAGE);
            access = true;
        } else {
            log.error(LOGIN_FAILED_MESSAGE);
        }
        
        return ResponseEntity.ok(access);
    }
    
}
