package com.treinamento.dosports.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author Renan Fricks
 */
@Getter
@Setter
@NoArgsConstructor
@NotNull
public class LoginDTO {
    
    @NotNull
    private String username;
    
    @NotNull
    @Size(min = 2, max = 16, message = "Password must be a minimum of 8 and a maximum of 16 characters")
    private String password;
}
